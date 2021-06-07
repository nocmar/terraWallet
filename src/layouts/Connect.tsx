
import useAddress from "../hooks/useAddress"
import { useModal } from "../containers/Modal"
import ConnectButton from "../components/ConnectButton"
import ConnectListModal from "./ConnectListModal"
import Connected from "./Connected"

const Connect = () => {
  const address = useAddress()
  const modal = useModal()

  return !address ? (
    <>
      <ConnectButton onClick={() => modal.open()}>
        {"Connect"}
      </ConnectButton>

      <ConnectListModal {...modal} />
    </>
  ) : (
    <Connected />
  )
}

export default Connect