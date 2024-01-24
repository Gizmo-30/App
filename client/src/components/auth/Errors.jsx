import {AnimatePresence, motion} from "framer-motion";
import React from "react";

const Errors = ({isInvalid, inputError}) => {
  return (
      <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
              <InputError
                  message={inputError.error.message}
                  key={inputError.error.message}
              />
          )}
      </AnimatePresence>
  )
}

const InputError = ({message}) => {
    return (
        <motion.p
            className="d-flex justify-content-end text-danger p-1 rounded-2 "
            style={{background: "rgba(255,205,210, 0.6)"}}
            {...framer_error}
        >
            {message}
        </motion.p>
    )
}

const framer_error = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.2 },
}

export default Errors