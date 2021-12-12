import React from "react"
import {
  Center,
  FlatList,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  Spinner,
  Text,
  VStack,
  Stagger,
  PresenceTransition, Box, Pressable
} from "native-base";
import { Drink } from "../stateManagement/state";
import { Ionicons } from '@expo/vector-icons';
import { Platform } from "react-native";

interface HomeComponentProps {
  allDrinks: Drink[];
  isFetchingAllDrinks: boolean;
  handleToNavigateCocktailDetailScreen: (cocktailId: string) => void;
}

const HomeScreen: React.FC<HomeComponentProps> = (props: HomeComponentProps) => {
  const renderDrink = (item: Drink, index: number) => {
    return <PresenceTransition visible={!props.isFetchingAllDrinks}
                    initial={{
                      opacity: 0,
                      translateY: -30,
                    }}
                    animate={{
                      translateY: 0,
                      opacity: 1,
                      transition:{
                        duration: 300 + (index * 50)
                      }
                    }}>
      <Pressable onPress={() => props.handleToNavigateCocktailDetailScreen(item.id)}>
        <Center bg={{
          linearGradient: {
            colors: ['lightBlue.100', 'primary.500'],
            start: [0.3, 0],
            end: [0, 1],
          },
        }}
                w={48}
                h="72"
                mx="5"
                my="2"
                rounded="90"
                justifyContent="space-evenly" p="4"
                shadow="3"
                _text={{
                  fontFamily: 'body',
                  fontWeight: '300',
                  fontSize: "md",
                  textAlign:"center",
                  color: "black",
                }}>
          <Image source={{ uri: item.thumbnail }} resizeMode="cover" borderRadius={100} size="md" alt={item.title}/>
          {item.title}
        </Center>
      </Pressable>
    </PresenceTransition>
  }
  const renderAllDrinks = () => {
    return <FlatList flexGrow={0}
                     data={props.allDrinks}
                     renderItem={({item, index}) => (
                       renderDrink(item, index)
                     )}
                     keyExtractor={(item) => item.id}
                     horizontal={true}
                     showsHorizontalScrollIndicator={false}/>
  }
  return (
    <Center flex={1}>
      <VStack space={1} alignItems="center">
        <Heading textAlign="center"  fontFamily="heading" fontWeight={400}>
          Cheers
        </Heading>
        <Text mb="2" fontSize="xs" fontFamily="body" fontWeight={200}>Find Your Favorite Drinks!</Text>
        <Input
          placeholder="Search"
          variant="filled"
          width="80%"
          bg="gray.200"
          borderRadius="10"
          py={Platform.OS === "android" ? "1" : "3"}
          px="2"
          mb="2"
          placeholderTextColor="gray.500"
          _hover={{ bg: 'gray.200', borderWidth: 0 }}
          borderWidth="0"
          // _web={{
          //   _focus: { style: { boxShadow: 'none' } },
          // }}
          InputLeftElement={
            <Icon
              ml="2"
              size="5"
              color="gray.500"
              as={<Ionicons name="ios-search" />}
            />
          }
        />
        {
          props.isFetchingAllDrinks
            ?
            <HStack>
              <Spinner accessibilityLabel="Loading Posts"/>
              <Heading color="primary.500" fontSize="md" fontFamily="heading" fontWeight={400}>
                Loading
              </Heading>
            </HStack>
            :
            null
        }
        {
          props.allDrinks.length > 0 ?
            renderAllDrinks()
            :
            null
        }
      </VStack>
    </Center>
  )
}

export default HomeScreen
