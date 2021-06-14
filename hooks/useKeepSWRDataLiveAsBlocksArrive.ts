import { useEffect, useRef } from 'react'
import useBlockNumber from '@hooks/useBlockNumber'

export default function useKeepSWRDataLiveAsBlocksArrive(mutate) {
  const mutateRef = useRef(mutate)

  useEffect(() => {
    mutateRef.current = mutate
  })

  const { data } = useBlockNumber()

  useEffect(() => {
    mutateRef.current()
  }, [data])
}
