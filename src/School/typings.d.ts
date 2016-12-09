interface Action {
  type: string;
  data?: {}
}

interface SchoolState {
  schools: School[];
}

type School = {
  name: string;
}
