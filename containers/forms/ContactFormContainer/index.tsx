import React, { HTMLAttributes } from 'react';
import ContactForm from 'components/forms/ContactForm';
import { useForm } from 'react-hook-form';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const ContactFormContainer: React.FC<IProps> = (props) => {
    const form = useForm<IContactForm>();
    const { handleSubmit, reset } = form;

    const onSubmit = (data: IContactForm) => {
        window.alert('Form submitted!');
        reset();
    };

    return (
        <div {...props}>
            <ContactForm form={form}
                         onSubmit={handleSubmit(onSubmit)}
            />
        </div>
    );
};

export default ContactFormContainer;
