import React from 'react';
import { useRouter } from 'next/router';
import Admin from '../../src/components/desktop/app/Admin'
const index = () => {
  const router = useRouter();
  const {admin} = router.query

  return (
    <div>
      <Admin/>
    </div>
  );
};

export default index;