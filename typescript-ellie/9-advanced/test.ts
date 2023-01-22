{
  interface IChildObject {
    property1: string,
    property2: number,
    property3: number,
  }

  interface IParentObject {
    child_object1: IChildObject,
    child_object2: IChildObject,
    child_object3: IChildObject,
    child_object4: IChildObject,
    child_object5: IChildObject,
  }

  const testChildObject:IParentObject = {
    child_object1: {
      property1: 'asdf',
      property2: 123,
      property3: 4234 
    },
    child_object2: {
      property1: 'asdf',
      property2: 123,
      property3: 4234 
    },
    child_object3: {
      property1: 'asdf',
      property2: 123,
      property3: 4234 
    },
    child_object4: {
      property1: 'asdf',
      property2: 123,
      property3: 4234 
    },

    child_object5: {
      property1: 'asdf',
      property2: 123,
      property3: 4234 
    }
  }
}