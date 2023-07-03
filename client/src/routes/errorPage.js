import '../assets/style.css'
import { useRouteError } from "react-router-dom";
import { motion } from 'framer-motion'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <motion.div
        id='err'
        className='page'
        transition={{ delay: 0.1 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        key={'animErr'}
      >     
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </motion.div>
    </>
  );
}