export class Role {
  private _id:number
  private _roleName:String

  constructor(id: number, role_name: String) {
    this._id = id;
    this._roleName = role_name;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get roleName(): String {
    return this._roleName;
  }

  set roleName(value: String) {
    this._roleName = value;
  }
}
