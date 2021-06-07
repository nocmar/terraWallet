
// import { gt } from "../libs/math"

import { useAddress } from "../hooks"
import ConnectedButton from "../components/ConnectedButton"
// import Balance from "./Balance"
import Wallet from "./Wallet"

// import WhereToBuy from "./WhereToBuy"
export const truncate = (text: string = "", [h, t]: number[] = [6, 6]) => {
    const head = text.slice(0, h)
    const tail = text.slice(-1 * t, text.length)
    return text.length > h + t ? [head, tail].join("...") : text
  }

const Connected = () => {
  const address = useAddress()
//   const shouldBuyUST = !!data && !gt(uusd, 0)

  return (
    <>
      <ConnectedButton
        address={truncate(address)}
        // balance={<Balance />}
         info={(close) => <Wallet close={close} />}
      />
      {/* {shouldBuyUST && <WhereToBuy />} */}
    </>
  )
}

export default Connected