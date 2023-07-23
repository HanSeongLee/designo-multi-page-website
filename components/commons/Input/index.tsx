import React, { InputHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import ErrorIcon from '/public/icons/icon-error.svg';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
}

const Input = React.forwardRef<HTMLInputElement, IProps>(({ error, className, ...props }, ref) => {
    return (
        <div className={cn(styles.inputWrapper, {
            [styles.error]: error,
        }, className)}
        >
            <input className={styles.input}
                   {...props}
                   ref={ref}
            />
            {error && (
                <div className={styles.errorMessage}>
                    {error} <ErrorIcon />
                </div>
            )}
        </div>
    );
});

export default Input;
