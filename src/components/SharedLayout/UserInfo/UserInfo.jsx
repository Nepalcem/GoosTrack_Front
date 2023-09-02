import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from 'components/modal/Modal';
import {
  ProfInfoWrap,
  FeedbackButton,
  NameField,
  AvatarThumb,
  Avatar,
} from './UserInfo.styled';
import ThemeToggler from 'components/ThemeToggler/ThemeToggler';
// import ThemeIcoButton from '../../../images/svg/moon.svg';
import UserAvatar from '../../../images/accountPage/default-profile-avatar.png';
import Popup1 from 'components/modal/Popup1/popup1';
// import Popup2 from 'components/modal/Popup2/popup2';
// import Popup3 from 'components/modal/Popup3/popup3';


const UserInfo = () => {
  const user = useSelector(state => state.auth.user);
  const [modalActive, setModalActive] = useState(false);

  return (
    <ProfInfoWrap>
      <FeedbackButton type="button" onClick={() => setModalActive(true)}>
        Feedback
      </FeedbackButton>
      <Modal active={modalActive} setActive={setModalActive}>
        <Popup1 setActive={setModalActive} />
        {/* <Popup2 setActive={setModalActive} /> */}
        {/* <Popup3 setActive={setModalActive} /> */}
      </Modal>
      <ThemeToggler />
      {/* <ThemeToggleButton type="button">
        <img src={ThemeIcoButton} alt="change theme" width="100%" />

      </ThemeToggleButton>
 
      </ThemeToggleButton> */}
         <NameField>{user.username}</NameField>

      <AvatarThumb>
        <Avatar src={UserAvatar} alt="user avatar" />
      </AvatarThumb>
    </ProfInfoWrap>
  );
};
export default UserInfo;
