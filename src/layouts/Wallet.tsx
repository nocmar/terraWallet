import { useWallet } from "@terra-money/wallet-provider"
//import MESSAGE from "../lang/MESSAGE.json"
//import { UUSD } from "../constants"

import { useAddress } from "../hooks"
// import { AccountInfoKey } from "../hooks/contractKeys"

import ConnectedInfo from "../components/ConnectedInfo"
export const truncate = (text: string = "", [h, t]: number[] = [6, 6]) => {
    const head = text.slice(0, h)
    const tail = text.slice(-1 * t, text.length)
    return text.length > h + t ? [head, tail].join("...") : text
  }

const Wallet = ({ close }: { close: () => void }) => {
  const address = useAddress()
  const { disconnect } = useWallet()
 // const { finder } = useNetwork()
  //useRefetch([AccountInfoKey.UUSD])

  const info = {
    address,
    disconnect,
    truncated: truncate(address),
    link: { href: "link", children: "finder" },
    // footer: {
    //   to: { pathname: getPath(MenuKey.SEND), state: { token: UUSD } },
    //   children: MenuKey.SEND,
    // },
  }

  return <ConnectedInfo {...info} close={close} />
}

export default Wallet