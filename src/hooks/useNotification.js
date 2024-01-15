
export const useNotification = (title, options) => {

  if (!("Notification" in window)) {
    return;
  }

  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  }

  return fireNotif;
}

// 사용 방법
// const triggerNotif = useNotification('알림메세지', { body: '보조메세지' });
// <button onClick={triggerNotif}>click</button>