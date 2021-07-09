import { useParams } from 'react-router-dom'
import { useError, useService, useToast, useUi } from 'hooks'
import { Api } from 'utils'

export const usePatientInteractionModal = () => {
  const { success } = useToast()
  const { onError } = useError()
  const { useDelete, client } = useService()
  const { id } = useParams() as any
  const {
    uiState: {
      dialog: { data, queryKey },
    },
    toggleDialog,
  } = useUi()

  return {
    deleteInteraction: () =>
      useDelete({
        url: data ? `${Api.interactions}${data.id}/` : '',
        params: { patient_id: id },
        onMutate: async () => {
          await client.cancelQueries(queryKey)
          const snapshot = client.getQueryData(queryKey)
          client.setQueryData(queryKey, (old: any) => {
            old.data.results = old.data.results.map((item) =>
              item.id == data.id
                ? {
                    ...item,
                    interaction_type: '',
                    interaction_datetime: '',
                    contact_admin: '',
                    contact_details: '',
                  }
                : item
            )
            return old
          })

          toggleDialog({ open: false, type: null, data: {} })
          return { snapshot }
        },
        onError: (error, data, context) => {
          client.setQueryData(queryKey, context.snapshot)
          onError(error)
        },
        onSettled: (data, error) => {
          if (error) onError(error)
          success('You successfully deleted this patient.')
          client.invalidateQueries(queryKey)
        },
      }),
  }
}
