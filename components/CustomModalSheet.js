import { View, Text } from 'react-native'
import React, { useMemo } from 'react'
import BottomSheetModal from "@gorhom/bottom-sheet"

const CustomModalSheet = () => {
    const snappoints = useMemo(()=>['25%'],[])
  return (
    <BottomSheetModal snapPoints={snappoints}>
         
    </BottomSheetModal>
  )
}

export default CustomModalSheet