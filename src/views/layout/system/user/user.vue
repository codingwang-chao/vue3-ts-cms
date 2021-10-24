<template>
  <div class="userContainer">
    <base-form :formItems='formItems' :labelWidth='labelWidth'/>
  </div>
</template>

<script>
import baseForm from '@/base-ui/base-form/index.js'
  export default {
    components: {
      baseForm
    },
    data() {
      return {
        formItems: [
          {
            label: '用户名',
            field: 'name',
            type: 'input',
            placeholder: '请输入用户名'
          },
          {
            label: '真实姓名',
            field: 'realname',
            type: 'input',
            placeholder: '请输入真实姓名'
          },
          {
            label: '电话号码',
            field: 'cellphone',
            type: 'input',
            placeholder: '请输入电话号码'
          },
          {
            label: '用户状态',
            field: 'enable',
            type: 'select',
            placeholder: '请选择用户状态',
            options: [
              {
                name: '启用',
                value: 1
              },
              {
                name: '禁用',
                value: 0
              }
            ]
          },
          {
            field: 'createAt',
            type: 'datepicker',
            label: '创建时间',
            otherOptions: {
              startPlaceholder: '开始时间',
              endPlaceholder: '结束时间',
              type: 'daterange'
            }
          }
        ],
        labelWidth: '90px'
      }
    },
  }
</script>