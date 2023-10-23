import { useNavigation } from "@react-navigation/native"
import { Button } from "react-native"
import { Box, Text } from "../../utils/theme"
import React from "react"
import { AuthScreenNavigationType } from "../../navigation/types"
import SafeAreaWrapper from "../../components/shared/safe-area-wrapper"


const SignInScreen = () => {

    const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>()
    const navigateToSignUpScreen = () => {
        navigation.navigate("SignUp")
    }

    return(
        <SafeAreaWrapper>
           <Box>
            <Text>
               Sign in screen 
               <Button title = "Navigate to sign up" onPress={navigateToSignUpScreen}  />
            </Text>
        </Box> 
        </SafeAreaWrapper>
        
    )
}

export default SignInScreen