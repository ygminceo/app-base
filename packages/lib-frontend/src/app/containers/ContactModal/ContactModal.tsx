import React from 'react';
import { ContactRequestModel } from '@lib/common/landing/models';
import { CONTACT_FORM_STEPS } from '@lib/frontend/app/containers/ContactModal/ContactModal.constants';
import { ContactModalProps } from '@lib/frontend/app/containers/ContactModal/ContactModal.model';
import { Modal, Steps, Wrapper } from '@lib/frontend/core/components';

export const ContactModal = ({ isOpen, onClose, ...props }: ContactModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Steps<ContactRequestModel> steps={CONTACT_FORM_STEPS} onSuccess={onClose} />
    </Modal>
  );
};
