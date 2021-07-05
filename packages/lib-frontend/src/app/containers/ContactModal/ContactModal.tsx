import React from 'react';
import { ContactRequestModel } from '@lib/common/app/models';
import { CONTACT_FORM_STEPS } from '@lib/frontend/app/containers/ContactModal/ContactModal.constants';
import { ContactModalProps } from '@lib/frontend/app/containers/ContactModal/ContactModal.model';
import { Modal, Steps } from '@lib/frontend/core/components';
import { useStyles } from '@lib/frontend/core/hooks';

export const ContactModal = ({ isOpen, onClose, ...props }: ContactModalProps) => {
  const { styles } = useStyles(props);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Steps<ContactRequestModel> style={styles} steps={CONTACT_FORM_STEPS} />
    </Modal>
  );
};
