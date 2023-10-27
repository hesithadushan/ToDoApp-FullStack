import { Box, Text } from "../../utils/theme";
import React from "react";
import SafeAreaWrapper from "../../components/shared/safe-area-wrapper";
import useSWR from "swr"
import { fetcher } from "services/config";


const HomeScreen = () => {
  const {data, isLoading  } = useSWR("categories",fetcher)
  return (
    <SafeAreaWrapper>
        <Box>
      <Text>Home</Text>
    </Box>
    </SafeAreaWrapper>
    
  );
};

export default HomeScreen;
