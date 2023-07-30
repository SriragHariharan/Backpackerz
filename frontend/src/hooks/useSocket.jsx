import { useSelector } from 'react-redux'
import { io } from 'socket.io-client'

export default function useSocket() {
    const userID = useSelector(state => state.user?.user?.userID);
    const socket = io('http://localhost:8000',{query:{userID}})
  return {socket}
}
