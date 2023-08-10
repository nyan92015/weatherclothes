import React from "react";

const currentDate = () => {
  const currentDate = new Date();

  // 年、月、日を取得
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // 月は0から11で表されるため、1を足す必要があります
  const day = currentDate.getDate();

  return <div>{`${year}-${month}-${day}`}</div>;
};

export default currentDate;
