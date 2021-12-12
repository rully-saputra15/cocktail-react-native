import React from "react"
import { Box, ScrollView, Skeleton, VStack, Text, HStack, Icon, Image, PresenceTransition, Divider } from "native-base";
import { DrinkDetail } from "../stateManagement/state";
import { SKELETON_WIDTH } from "../masterData/constants";
import { FontAwesome5, MaterialIcons, AntDesign } from '@expo/vector-icons';


interface CocktailDetailScreenProps {
  drinkDetail: DrinkDetail;
  isFetchingDrinkDetail: boolean;
}

export const CocktailDetailScreen: React.FC<CocktailDetailScreenProps> = (props: CocktailDetailScreenProps) => {
  const drinkDetail = props.drinkDetail;
  const isFetchingDrinkDetail = props.isFetchingDrinkDetail;

  const RenderSkeletonLoading = () => {
    let skeletons: JSX.Element[] = [];
    for (let i = 0; i < 8; i++) {
      skeletons.push(<Skeleton key={i}
                               height="24"
                               w={SKELETON_WIDTH} mb={4}/>)
    }
    return <VStack m="4">
      {skeletons}
    </VStack>
  }
  const RenderDrinkImage = () => {
    return <Box shadow="4" bg="white" borderRadius="full">
      <Image source={{
        uri: drinkDetail.thumbnail
      }}
             alt="thumbanil" size="48" borderRadius="full" resizeMode="contain"/>
    </Box>
  }
  const RenderTitle = () => {
    return <Text fontFamily="heading" fontWeight={400} fontSize="24" textAlign="center">{drinkDetail.title}</Text>
  }
  const RenderGlass = () => {
    return <HStack justifyContent="flex-start"
                   alignItems="center" p="4"
                   shadow="4"
                   borderRadius="12"
                   w="full"
                   h="20"
                   bg={{
                     linearGradient:{
                       colors:['muted.50','yellow.200'],
                       start:[0,1],
                       end:[0,0]
                     }
                   }}>
      <Icon as={FontAwesome5} size="6" name="glass-martini-alt" color="black"/>
      <VStack>
        <Text pl="2" fontSize="12" fontFamily="body" fontWeight="100">Glass</Text>
        <Text pl="2" fontFamily="body" fontWeight="400" fontSize="16">{drinkDetail.glass}</Text>
      </VStack>
    </HStack>
  }
  const RenderCategoryAndTag = () => {
    return <>
      <HStack w="full" justifyContent="space-between" pb="2">
        <HStack justifyContent="flex-start"
                alignItems="center" p="4"
                shadow="4"
                w="45%"
                borderRadius="12"
                bg={{
                  linearGradient:{
                    colors:['muted.50','red.200'],
                    start:[0,1],
                    end:[0,0]
                  }
                }}>
          <Icon as={MaterialIcons} size="6" name="category" color="black"/>
          <VStack pr="2">
            <Text pl="2" fontSize="12" fontFamily="body" fontWeight="100">Category</Text>
            <Text pl="2" fontFamily="body" fontWeight="400" fontSize="14" numberOfLines={2} ellipsizeMode="tail">{drinkDetail.category}</Text>
          </VStack>
        </HStack>
        <HStack justifyContent="flex-start"
                alignItems="center" p="4"
                shadow="4"
                w="45%"
                borderRadius="12"
                bg={{
                  linearGradient:{
                    colors:['muted.50','darkBlue.200'],
                    start:[0,1],
                    end:[0,0]
                  }
                }}>
          <Icon as={AntDesign} size="6" name="tags" color="black"/>
          <VStack>
            <Text pl="2" fontSize="12" fontFamily="body" fontWeight="100">Tag</Text>
            <Text pl="2" fontSize="16">{drinkDetail.tags === null ? "-" : drinkDetail.tags}</Text>
          </VStack>
        </HStack>
      </HStack>
    </>
  }
  const RenderInstruction = () => {
    return <Box shadow="4" bg="warmGray.200" w="full" borderRadius="12" p="4" alignSelf="flex-start">
      {drinkDetail.instructions ? drinkDetail.instructions : "No Information"}
    </Box>
  }
  const fadeUpTransition = (component: JSX.Element, duration: number) => {
    return <PresenceTransition visible={!props.isFetchingDrinkDetail}
                               initial={{
                                 opacity: 0,
                                 translateY: -30,
                               }}
                               animate={{
                                 translateY: 0,
                                 opacity: 1,
                                 transition: {
                                   duration: duration
                                 }
                               }}>
      {component}
    </PresenceTransition>
  }
  const RenderSubTitle = (props: any) => {
    return <>
      <Text alignSelf="flex-start" fontSize="20" fontWeight="400" w="32">{props.title}</Text>
      <Divider alignSelf="flex-start" w="32" thickness="3" bg={{
        linearGradient:{
          colors:['muted.50',props.lineColor],
          start:[1,0],
          end:[0,1]
        }
      }}/>
    </>
  }
  const RenderIngredients = () => {
    return <Box w="full"
                borderRadius="12"
                shadow="4"
                p="3"
                bg={{
                  linearGradient:{
                    colors:['muted.50','green.200'],
                    start:[0,1],
                    end:[0,0]
                  }
                }}>
      {
        drinkDetail.ingredients
        ?
          drinkDetail.ingredients.map((ingredient,index) => {
            if(ingredient) {
              return <HStack justifyContent="space-between" py="1" key={'ingredients' + index}>
                <Text>{ingredient}</Text>
                <Text>{drinkDetail.measures[index]}</Text>
              </HStack>
            }
          })
          :
          null
      }
    </Box>
  }
  return (
    <Box safeArea mt="9">
      <ScrollView showsVerticalScrollIndicator={false}>
        {
          isFetchingDrinkDetail
            ?
            <RenderSkeletonLoading/>
            :
            <VStack space="3" justifyContent="center" alignItems="center" w="full" p="5">
              {fadeUpTransition(<RenderDrinkImage/>, 300)}
              {fadeUpTransition(<RenderTitle/>, 400)}
              <RenderGlass/>
              <RenderCategoryAndTag/>
              <RenderSubTitle title="Ingredients" lineColor="green.200"/>
              <RenderIngredients/>
              <RenderSubTitle title="Instructions" lineColor="warmGray.200"/>
              <RenderInstruction/>
            </VStack>
        }
      </ScrollView>
    </Box>
  )
}
