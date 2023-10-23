import { useNavigation } from "@react-navigation/native"
import { Button } from "react-native"
import { Box, Text } from "../../utils/theme"
import React from "react"
import { AuthScreenNavigationType } from "../../navigation/types"
import SafeAreaWrapper from "../../components/shared/safe-area-wrapper"


const SignUpScreen = () => {

    const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>()
    const navigateToSignInScreen = () => {
        navigation.navigate("SignIn")
    }

    return(
        <SafeAreaWrapper>
            <Box>
            <Text>
               Sign in screen 
               <Button title = "Navigate to sign in" onPress={navigateToSignInScreen}  />
            </Text>
        </Box>
        </SafeAreaWrapper>
        
    )
}

export default SignUpScreen