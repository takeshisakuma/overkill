import React, { FC } from "react";
import browserListType from "./browserListType";

import styles from "./browserList.module.scss";

const BrowserList: FC<browserListType> = ({ browserData }) => {
  return (
    <>
      <ul className={styles.browserListCardGroup}>
        {browserData.map((member, index) => (
          <li
            key={index}
            className={[styles.browserListCardMember, "browserAnimation"].join(
              " "
            )}
            style={{
              backgroundImage: `url(/overkill/browser/${member.img}.svg)`,
            }}
          >
            <div className={styles.browserListNameWrapper}>
              <p className={styles.browserListName}>{member.name}</p>
            </div>
            <div className={styles.browserListTextWrapper}>
              <p className={styles.browserListText}>{member.text}</p>
            </div>

            <div className={styles.browserListButtonWrapper}>
              <p className={styles.browserListButton}>
                <a
                  href={member.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.browserListAnchor}
                >
                  download
                </a>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BrowserList;
