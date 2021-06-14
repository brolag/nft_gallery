import useContract from '@hooks/useContract'

const ABI = [
  'function balanceOf(address owner) view returns (uint)',
  'function transfer(address to, uint amount)',
  'event Transfer(address indexed from, address indexed to, uint amount)',
]

export default function useERC20Contract(tokenAddress) {
  return useContract(tokenAddress, ABI)
}
