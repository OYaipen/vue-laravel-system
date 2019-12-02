<template>
  <div>
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">{{$t('users')}}</h1>
      <button
        href="#"
        class="d-sm-inline-block btn btn-sm btn-success shadow-sm"
        @click.prevent="newModal"
      >
        <fa icon="user-plus" class="fas fa-download fa-sm text-white-50"></fa>
        {{$t('add_user')}}
      </button>
    </div>
    <div class="card shadow mb-4 border-left-success">
      <div class="card">
        <div class="card-body table-responsive p-0">
          <table class="table table-hover">
            <tbody>
              <tr>
                <th>ID</th>
                <th>{{$t('name')}}</th>
                <th>{{$t('email')}}</th>
                <th>{{$t('type')}}</th>
                <th>{{$t('created')}}</th>
                <th>{{$t('modify')}}</th>
              </tr>
              <tr v-for="user in users.data" :key="user.id">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
                <td>{{user.type | upText}}</td>
                <td>{{user.created_at | myDate}}</td>

                <td>
                  <a href="#" @click="editModal(user)">
                    <fa icon="edit" class="blue"></fa>
                  </a>
                  /
                  <a href="#" @click="deleteUser(user.id)">
                    <fa icon="trash" class="red"></fa>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-footer">
          <pagination :data="users" @pagination-change-page="getResults"></pagination>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="addNew"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addNewLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" v-show="!editmode" id="addNewLabel">{{$t('add_new_user')}}</h5>
            <h5
              class="modal-title"
              v-show="editmode"
              id="addNewLabel"
            >{{$t('update_user_information')}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="editmode ? updateUser() : createUser()">
            <div class="modal-body">
              <div class="form-group">
                <input
                  v-model="form.name"
                  type="text"
                  name="name"
                  :placeholder="$t('name')"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('name') }"
                />
                <has-error :form="form" field="name"></has-error>
              </div>

              <div class="form-group">
                <input
                  v-model="form.email"
                  type="email"
                  name="email"
                  :placeholder="$t('email')"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('email') }"
                />
                <has-error :form="form" field="email"></has-error>
              </div>

              <div class="form-group">
                <textarea
                  v-model="form.bio"
                  name="bio"
                  id="bio"
                  :placeholder="$t('biography')"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('bio') }"
                ></textarea>
                <has-error :form="form" field="bio"></has-error>
              </div>

              <div class="form-group">
                <select
                  name="type"
                  v-model="form.type"
                  id="type"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('type') }"
                >
                  <option value>{{$t('select_user_role')}}</option>
                  <option value="admin">{{$t('admin')}}</option>
                  <option value="user">{{$t('user_standard')}}</option>
                  <option v-if="user.type == 'developer'" value="developer">{{$t('developer')}}</option>
                </select>
                <has-error :form="form" field="type"></has-error>
              </div>

              <div class="form-group">
                <input
                  v-model="form.password"
                  type="password"
                  name="password"
                  id="password"
                  :placeholder="$t('password')"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('password') }"
                />
                <has-error :form="form" field="password"></has-error>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">{{$t('close')}}</button>
              <button v-show="editmode" type="submit" class="btn btn-success">{{$t('update')}}</button>
              <button v-show="!editmode" type="submit" class="btn btn-primary">{{$t('create')}}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  middleware: "admin",
  layout: "dashboard",
  metaInfo() {
    return { title: this.$t("users") };
  },
  computed: mapGetters({
    user: "auth/user"
  }),
  data() {
    return {
      editmode: false,
      users: {},
      form: new Form({
        id: "",
        name: "",
        email: "",
        password: "",
        type: "",
        bio: "",
        photo: ""
      })
    };
  },
  methods: {
    getResults(page = 1) {
      axios.get("api/users?page=" + page).then(response => {
        this.users = response.data;
      });
    },
    updateUser() {
      this.form.put("api/users/" + this.form.id).then(() => {
        $("#addNew").modal("hide");
        Swal.fire(
          "Actualizado!",
          "La información ha sido actualizada.",
          "success"
        );
        this.$Progress.finish();
        Fire.$emit("AfterCreate");
      });
    },
    editModal(user) {
      this.editmode = true;
      this.form.reset();
      $("#addNew").modal("show");
      this.form.fill(user);
    },
    newModal() {
      this.editmode = false;
      this.form.reset();
      $("#addNew").modal("show");
    },
    deleteUser(id) {
      Swal.fire({
        title: "¿Estás seguro?",
        text: "¡No podrás revertir esto!",
        type: "warning",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, bórralo!"
      }).then(result => {
        if (result.value) {
          this.form
            .delete("api/users/" + id)
            .then(() => {
              Swal.fire(
                "¡Eliminado!",
                "Su archivo ha sido eliminado.",
                "success"
              );
              Fire.$emit("AfterCreate");
            })
            .catch(() => {
              Swal.fire("Ha Fallado!", "Algo andaba mal.", "warning");
            });
        }
      });
    },
    loadUsers() {
      axios.get("api/users").then(({ data }) => (this.users = data));
    },
    createUser() {
      this.$Progress.start();
      this.form.post("api/users").then(() => {
        Fire.$emit("AfterCreate");
        $("#addNew").modal("hide");
        toast.fire({
          type: "success",
          title: "Creado exitosamente"
        });
        this.$Progress.finish();
      });
    }
  },
  mounted() {
    console.log("Component mounted.");
  },
  created() {
    this.$root.$on("find", res => {
      let query = res.key;
      axios.get("api/findUser?q=" + query).then(data => {
        this.users = data.data;
      });
    });
    this.loadUsers();
    Fire.$on("AfterCreate", () => {
      this.loadUsers();
    });
  }
};
</script>