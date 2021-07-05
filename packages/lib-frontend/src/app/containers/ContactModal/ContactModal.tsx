import { ContactRequestModel } from '@lib/common/app/models';
import { CONTACT_FORM_STEPS } from '@lib/frontend/app/containers/ContactModal/ContactModal.constants';
import { ContactModalProps } from '@lib/frontend/app/containers/ContactModal/ContactModal.model';
import { Modal, Steps } from '@lib/frontend/core/components';
import React from 'react';

export const ContactModal = ({ isOpen, onClose, ...props }: ContactModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Steps<ContactRequestModel> steps={CONTACT_FORM_STEPS} onSuccess={onClose} />
    </Modal>
  );
};
