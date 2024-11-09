import { Box, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const SwipeableAction = ({
    children,
    // onSwipeLeft,
    backgroundComponent,
}: {
    children: React.ReactNode;
    // onSwipeLeft: () => void;
    backgroundComponent?: React.ReactNode;
}) => {
    return (
        <Box
            sx={{
                backgroundColor: '#fff',
                position: 'relative',
            }}
        >
            {backgroundComponent || (
                <Stack
                    sx={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        bottom: 0,
                        zIndex: 0,
                        width: '3.75rem',
                        height: '4.5rem',
                        backgroundColor: '#E07590', // TODO: theme 설정 이후 바꾸기
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography>삭제</Typography>
                </Stack>
            )}
            <Box
                component={motion.div}
                sx={{
                    zIndex: 100,
                    position: 'relative',
                }}
                drag='x'
                dragConstraints={{ left: -60, right: 0 }}
                dragTransition={{ bounceStiffness: 250, bounceDamping: 50 }}
                dragSnapToOrigin={true}
                dragElastic={0}
            >
                {children}
            </Box>
        </Box>
    );
};

export default SwipeableAction;
