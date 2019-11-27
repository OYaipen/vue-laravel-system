 <template>
  <!-- Footer -->
  <footer class="sticky-footer bg-white">
    <div class="container my-auto">
      <div class="copyright text-center my-auto">
        <span>Copyright &copy; {{appName}} 2019</span>
      </div>
    </div>
  </footer>
  <!-- End of Footer -->
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Footer",
  data: () => ({
    appName: window.config.appName
  }),

  computed: mapGetters({
    user: "auth/user"
  })
};
</script>

<style>
</style>