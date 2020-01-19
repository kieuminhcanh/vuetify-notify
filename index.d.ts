import Vue, { PluginFunction, VueConstructor } from 'vue'

interface ToastOptions {
  x: 'left' | 'right'
  y: 'bottom' | 'top'
  timeout: number
  color: string
}

interface DialogData {
  type: 'success' | 'info' | 'warning' | 'error'
  title: string
  text: string
}

interface DialogOptions {
  type: 'prompt' | 'confirm'
}

interface Notify {
  toast(text: string, options?: Partial<ToastOptions>): void

  toast(text: string, options?: Partial<ToastOptions>): Promise<void>

  show(data: DialogData, options?: Partial<DialogOptions>): Promise<void>

  confirm(data: DialogData, options?: Partial<Exclude<DialogOptions, { type: string }>>): Promise<void>

  prompt(data: DialogData, options?: Partial<Exclude<DialogOptions, { type: string }>>): Promise<void>
}

declare module 'vue/types/vue' {
  interface Vue {
    $notify: Notify
  }
}

declare const v: PluginFunction<any>
export default v

