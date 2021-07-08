import { useUi } from 'hooks/use-ui'
import { FC, memo } from 'react'
import { classNames } from 'utils'

export const InputLabel: FC<IInput> = memo(({ label, size }) => {
  const {
    uiState: { dark },
  } = useUi()

  if (label)
    return (
      <label
        className={classNames(
          ' mb-2',
          size === 'small' ? 'text-xs' : 'text-base',
          dark ? 'text-dark' : 'text-light'
        )}
      >
        {label}
      </label>
    )
  else return null
})
