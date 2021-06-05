import React, { FC } from "react";
import eventListType from "./eventListType";

import styles from "./eventList.module.scss";

const EventList: FC<eventListType> = ({ eventData }) => {
  return (
    <>
      <ul className={styles.eventListCardGroup}>
        {eventData.map((member, index) => (
          <li key={index} className={styles.eventListCardMember}>
            <div className={styles.eventListCardNameWrapper}>
              <div className={styles.eventListImageWrapper}>
                <img
                  src={`/overkill/icon/${member.img}`}
                  alt={`${member.name}`}
                  className={styles.eventListImage}
                />
              </div>

              <p className={styles.eventListCardNameText}>{member.name}</p>
            </div>
            <div className={styles.eventListGroupWrapper}>
              <ul className={styles.eventListGroup}>
                {member.list.map((eventName, index) => (
                  <li className={styles.eventListMember}>{eventName}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventList;
