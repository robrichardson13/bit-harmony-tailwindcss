import React from 'react';
import { Button } from './button';

export const ExampleButton = () => {
    return (
        <Button>
            Example Button
        </Button>
    );
};

export const DisabledButton = () => {
    return (
        <Button disabled>
            Disabled Button
        </Button>
    );
};