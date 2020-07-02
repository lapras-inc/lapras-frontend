<template>
  <div>
    <AvatarImg />
    <Card />
    <CheckBox />
    <EnhancedIconButton />
    <FieldGroup />
    <FlatButton />
    <Icon />
    <Modal />
    <ProtectedLink />
    <Radio />
    <RatingBar />
    <SelectBox />
    <TagLabel />
    <TextInput />
    <ToggleLabelSet />
    <ToggleSwitch />
    <Tooltip />>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  AvatarImg,
  Card,
  CheckBox,
  EnhancedIconButton,
  FieldGroup,
  FlatButton,
  Icon,
  Modal,
  ProtectedLink,
  Radio,
  RatingBar,
  SelectBox,
  TagLabel,
  TextInput,
  ToggleLabelSet,
  ToggleSwitch,
  Tooltip,
} from 'lapras-frontend'

export default Vue.extend({
  components: {
    AvatarImg,
    Card,
    CheckBox,
    EnhancedIconButton,
    FieldGroup,
    FlatButton,
    Icon,
    Modal,
    ProtectedLink,
    Radio,
    RatingBar,
    SelectBox,
    TagLabel,
    TextInput,
    ToggleLabelSet,
    ToggleSwitch,
    Tooltip,
  },
})
</script>
