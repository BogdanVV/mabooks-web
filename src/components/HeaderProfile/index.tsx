import { IoIosArrowDown, IoIosArrowUp, IoMdPerson } from 'react-icons/io';
import { useEffect, useRef, useState } from 'react';
import {
  Container,
  Dropdown,
  ProfileOptionsContainer,
  ProfileOption,
  Chevron,
  ProfileImageContainer,
} from './styled';
import Image from 'next/image';

export const HeaderProfile = () => {
  const [isDropDownMenu, setIsDropDownMenu] = useState<boolean>(false);
  // TODO: add profileImage to user
  const isProfileImage = true;
  const profileOptions = [
    { title: 'Profile info', onClick: () => console.log('profile info') },
    { title: 'Log out', onClick: () => console.log('Log out') },
    { title: 'Something else', onClick: () => console.log('Something else') },
    { title: 'Do stuff', onClick: () => console.log('Do stuff') },
  ];
  const dropBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutsideDropbox = (e: MouseEvent) => {
      if (
        dropBoxRef.current &&
        !dropBoxRef.current.contains(e.target as Node)
      ) {
        setIsDropDownMenu(false);
      }
    };
    document.addEventListener('click', handleClickOutsideDropbox);

    return () => {
      document.removeEventListener('click', handleClickOutsideDropbox);
    };
  }, []);

  return (
    <Container
      ref={dropBoxRef}
      onClick={() => setIsDropDownMenu((prevState) => !prevState)}
    >
      <Dropdown>
        {/* TODO: add profileImage to user */}
        {isProfileImage ? (
          <ProfileImageContainer>
            <Image
              fill
              alt='Avatar'
              src='https://i.pinimg.com/736x/c3/e9/b2/c3e9b2f8f491ba021079b48bf81b35c8--mr-bean-funny-gifs.jpg'
            />
          </ProfileImageContainer>
        ) : (
          <IoMdPerson size={24} />
        )}
        <Chevron $isDropDownActive={isDropDownMenu} size={24} />
        <ProfileOptionsContainer isDropDownMenu={isDropDownMenu}>
          {profileOptions.map((option) => (
            <ProfileOption key={option.title} onClick={option.onClick}>
              {option.title}
            </ProfileOption>
          ))}
        </ProfileOptionsContainer>
      </Dropdown>
    </Container>
  );
};
