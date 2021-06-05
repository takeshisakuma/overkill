import React, { FC } from "react";
import serviceListType from "./serviceListType";

import styles from "./serviceList.module.scss";

const ServiceList: FC<serviceListType> = ({ service }) => {
  return (
    <>
      <ul className={styles.supportGroup}>
        {service.map((member, index) => (
          <li key={index} className={styles.supportMember}>
            <div className={styles.supportImageWrapper}>
              <img
                src={`/overkill/${member.img}`}
                alt={member.name}
                className={styles.supportImage}
              />
            </div>
            <div className={styles.supportNameWrapper}>
              <p className={styles.supportName}>{member.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ServiceList;
