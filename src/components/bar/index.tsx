import React from 'react';
import { Flex, Icon} from "@chakra-ui/react";


export const Bar = () => {
    return (
        <Flex width={`calc(100vh - 20vh)`} borderRight='1px solid #E1E1E1' justifyContent='center' pt='50px'>
            <Flex width='56px' height='56px' bg='#E2E2EA' borderRadius='8px' alignItems='center'
                  justifyContent='center'>
                <Icon>
                    <svg width="30" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M18 3.52983V13.7064C19.1046 13.7064 20 12.878 20 11.8561V2.60468C20 1.5828 19.1046 0.754395 18 0.754395H8C6.89543 0.754395 6 1.5828 6 2.60468H17C17.5523 2.60468 18 3.01888 18 3.52983ZM15 16.4818V6.30526C15 5.79432 14.5523 5.38011 14 5.38011H3C3 4.35823 3.89543 3.52983 5 3.52983H15C16.1046 3.52983 17 4.35823 17 5.38011V14.6316C17 15.6534 16.1046 16.4818 15 16.4818ZM12 6.30526H2C0.89543 6.30526 0 7.13366 0 8.15555V17.407C0 18.4289 0.89543 19.2573 2 19.2573H12C13.1046 19.2573 14 18.4289 14 17.407V8.15555C14 7.13366 13.1046 6.30526 12 6.30526ZM2 17.407V8.15555H12V17.407H2Z"
                              fill="#9A9AB0"/>
                    </svg>
                </Icon>
            </Flex>
        </Flex>
    );
};
