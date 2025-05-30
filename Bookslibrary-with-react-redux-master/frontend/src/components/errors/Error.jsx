import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { clearError, selectErrorMsg } from "../../redux/slices/errorSlice";
import { useEffect } from "react";

const Error = () => {
  const errorMessage = useSelector(selectErrorMsg);
  const dispatch = useDispatch();

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage, {
        onClose: () => dispatch(clearError()),
      });
    }
  }, [errorMessage, dispatch]);

  return <ToastContainer position="top-right" autoClose={2000} />;
};

export default Error;
