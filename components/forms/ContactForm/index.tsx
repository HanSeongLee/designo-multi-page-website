import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Button, { ButtonVariant } from 'components/commons/Button';
import Input from 'components/commons/Input';
import TextArea from 'components/commons/TextArea';
import { ERROR_MESSAGES } from 'data/errors';
import { PATTERNS } from 'data/constants';
import { UseFormReturn } from 'react-hook-form/dist/types/form';

interface IProps extends HTMLAttributes<HTMLFormElement> {
    form: UseFormReturn<IContactForm>;
}

const ContactForm: React.FC<IProps> = ({ form, className, ...props }) => {
    const { register, formState: { errors } } = form;

    return (
        <form className={cn(styles.contactForm, className)}
              {...props}
        >
            <Input placeholder={'Name'}
                   error={errors.name?.message}
                   {...register('name', { required: ERROR_MESSAGES.FIELD_REQUIRED })}
            />
            <Input placeholder={'Email Address'}
                   error={errors.email?.message}
                   {...register('email', {
                       required: ERROR_MESSAGES.FIELD_REQUIRED,
                       pattern: {
                           value: PATTERNS.EMAIL,
                           message: ERROR_MESSAGES.INVALID_EMAIL,
                       },
                   })}
            />
            <Input placeholder={'Phone'}
                   error={errors.phone?.message}
                   {...register('phone', {
                       required: ERROR_MESSAGES.FIELD_REQUIRED,
                       pattern: {
                           value: PATTERNS.PHONE,
                           message: ERROR_MESSAGES.INVALID_PHONE,
                       },
                   })}
            />
            <TextArea placeholder={'Your Message'}
                      error={errors.message?.message}
                      {...register('message', { required: ERROR_MESSAGES.FIELD_REQUIRED })}
            />
            <div className={styles.buttonContainer}>
                <Button variant={ButtonVariant.Secondary}
                        type={'submit'}
                >
                    Submit
                </Button>
            </div>
        </form>
    );
};

export default ContactForm;
