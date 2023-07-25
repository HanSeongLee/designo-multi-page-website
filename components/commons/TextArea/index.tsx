import React, { TextareaHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import ErrorIcon from '/public/icons/icon-error.svg';

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: string;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, IProps>(({ error, className, children, ...props }, ref) => {
    return (
        <div className={cn(styles.textAreaWrapper, {
            [styles.error]: error,
        }, className)}>
            <textarea className={styles.textArea}
                      {...props}
                      ref={ref}
            >
                {children}
            </textarea>
            {error && (
                <div className={styles.errorMessage}>
                    {error} <ErrorIcon />
                </div>
            )}
        </div>
    );
});

export default TextArea;
