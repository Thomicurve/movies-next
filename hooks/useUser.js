import { useEffect, useContext } from "react";
import { userContext } from "context/UserContext";
import { getActiveSession } from "../firebase/auth";

const useUser = () => {
  const { setUser, user } = useContext(userContext)

  useEffect(() => {
    getActiveSession(setUser)
  }, [])

  return { user }
}

export default useUser