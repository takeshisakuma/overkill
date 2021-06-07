import React, { FC, useState, useEffect } from "react";
import loadingCheckerType from "./loadingCheckerType";

import styles from "./loadingChecker.module.scss";

const LoadingChecker: FC<loadingCheckerType> = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (process.browser) {
      setTimeout(() => {
        endLoading();
      }, 20000);
    }
  });

  const endLoading = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <div className={styles.loadingOverlay}>
          <div className={styles.loadingSpinnerWrapper}>
            <img
              src="/overkill/spinner/spinner.svg"
              className={styles.loadingSpinner}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default LoadingChecker;
