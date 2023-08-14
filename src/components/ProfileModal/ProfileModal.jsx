import { useDisclosure } from '@mantine/hooks';
// import { Group, Button } from '@mantine/core';
import './ProfileModal.css'

import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({modalOpened, setModalOpened}) {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={()=>setModalOpened(false)}
        title="Authentication"
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
          // size: '55%',
        }}
        size='55%'
        // opened = {}
      >
        <form action="" className="infoForm">
            <h3>Your Info</h3>

            <div>
              <input type="text" placeholder='First Name' name='firstName' className='info-input'/>
              <input type="text" placeholder='Last Name' name='lastName' className='info-input'/>
            </div>
            <div>
              <input type="text" name="worksAt" placeholder='Works At' className="info-input" />
            </div>
            <div>
              <input type="text" placeholder='City' name='city' className='info-input'/>
              <input type="text" placeholder='Country' name='country' className='info-input'/>
            </div>
            <div>
              <input type="text" placeholder='Relationship Status' name='relStat' className='info-input'/>
            </div>
            <div>
              Profile Image
              <input type="file" name="profileImg" id="" />
              Cover Image
              <input type="file" name="coverImg" id="" />
            </div>
            <button className="button info-button">Submit</button>
        </form>
      </Modal>

      {/* <Group position="center">
        <Button onClick={open}>Open modal</Button>
      </Group> */}
    </>
  );
}

export default ProfileModal