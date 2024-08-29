import { motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';

const PageTransition = () => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0,transform: 'translateY(2rem)' }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transform: 'translateY(-2rem)' }}
      transition={{
        opacity: { duration: 1, ease: 'easeInOut' }
      }}
    >
      <Outlet />
    </motion.div>
  );
};

export default PageTransition;
