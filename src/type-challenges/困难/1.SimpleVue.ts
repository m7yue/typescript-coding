
// https://juejin.cn/post/6927507521783627790

// @Q
type ComputedValues<C> = {
  [key in keyof C]: C[key] extends (...args: unknown[]) => infer R ? R : never
}

declare function SimpleVue<D, C, M>(options: {
  data: (this: {}) => D,
  computed: C & ThisType<D>,
  methods: M & ThisType<D & M & ComputedValues<C>>
}): any

const instance = SimpleVue({
  data() {
    return {
      firstname: 'Type',
      lastname: 'Challenges',
      amount: 10,
    }
  },
  computed: {
    fullname() {
      return this.firstname + ' ' + this.lastname
    }
  },
  methods: {
    hi() {
      alert(this.fullname.toLowerCase())
    }
  }
})


type VueOptions<D, C, M> = {
  data: (this: unknown) => D,
  computed: C & ThisType<D>,
  methods: M & ThisType<D & M & ComputedValues<C>>
}

interface MyVue {
  new <D, C, M>(options: VueOptions<D, C, M>): any
}

declare const MyVue: MyVue

const instance1 = new MyVue({
  data() {
    return {
      firstname: 'Type',
      lastname: 'Challenges',
      amount: 10,
    }
  },
  computed: {
    fullname() {
      return this.firstname + ' ' + this.lastname
    }
  },
  methods: {
    hi() {
      alert(this.fullname.toLowerCase())
    }
  }
})
