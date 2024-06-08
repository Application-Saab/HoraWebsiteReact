import React from 'react';

function Orderlist() {
  const styles = {
    textCenter: {
      textAlign: 'center',
    },
    entryContent: {
      padding: '0 20%',
    },
  };

  return (
    <main>
      <div className="container occation-intro-inner col-lg-12 row justify-content-center d-flex align-items-center">
        <h3 style={styles.textCenter}>Order History</h3>
      
      </div>
    </main>
  );
}

export default Orderlist;
