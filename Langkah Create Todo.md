=====Langkah-langkah Create TODO apps=====
1. Buat 1 module untuk menampung keseluruhan TodoApp
command :
  --mkdir modules (untuk menampung semua child module ke depannya)
  --cd modules
  --ng modules app-todo --routing (untuk module dan routing keseluruhan proses todo)
2. Buat component CRUD-TODO untuk halaman utama todo
3. Buat component list, post, dan detail di dalam CRUD-TODO
4. Buat lazyload Module pada app-todo.routing untuk :
  --Menjadi ListComponent sebagai tampilan utama: {path:'', component: CrudTodoComponent}
  --Membuat akses untuk proses detail todo: {path:'detail/:_id', component: DetailsTodoComponent}
5. Masukkan selector dari ListComponent dan PostComponent pada halaman html CRUD-TODO
6. Buat lazyload Module untuk routing TodoApp
  {
    path: 'todoapp',
    loadChildren: () => import('./modules/app-todo/app-todo.module').then(m => m.AppTodoModule)
  },


=====Setting Dependensi Injection=====
1. Buat file servis
2. Import HttpClientModule di app module
3. Kembali ke file servis, import HttpClient dan buat depedensi injeksi di dalam file service :
   -- private http:HttpClient ->didalam constructor
4. Balik ke AppModule, tambahkan provide dengan nama class servis yg sudah dibuat sebagai dependesi injeksi
   -- providers: [TodoapiService]

=====Get Data From API=====
1. Import HttpClient
2. Import class/interface yang sudah dibuat
3. Import observable
4. Import environtment(untuk base url)
5. Import map

Buat method :
  -- GetAllTodo -> get all data from todo
  -- GetTodoById -> get todo by id
  -- PostTodo -> post new todo
  -- UpdateTodo -> Get todo by id + update todo title or description
  -- DeleteTodo -> delete todo by id

=====GETALLTODO Exectuion in HTML=====
1. Ke file ListComponent.ts
2. Import Servis yang sudah dibuat
3. Import model
4. Import observable
5. buat depedensi injeksi dengan menggunakan servis yg sudah dibuat :
   -- private serviceName:ServiceNameClass ->didalam constructor
6. Buat sebuah variabel untuk menerima data berupda objek yang di dapat dari observable
   --todos$: Observable<Todo[]>;
7. Inject servis untuk mengeksekusi method getAllTodo
   --this.todos$ = this.todoapiService.getTodo();
8. Buka ListComponent HTML, looping data pada tabel row bagian tabel body
   --*ngFor="let todo of todos$ | async
      -- todo->variabel sementara untuk menampung data dari todos$
      -- async -> menampilkan data secara asyncronus

=====PostTodo Execute in HTML=====
1. Ke file PostComponent.ts
2. Import Servis yang sudah dibuat
3. Import model
4. Import observable
5. Import FormGroup dan FormControl dari angular
6. buat depedensi injeksi dengan menggunakan servis yg sudah dibuat :
   -- private serviceName:ServiceNameClass ->didalam constructor
7. buat sebuah variabel untuk formgroup dan formcontrol
   todoform = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
    });
8. Buat method untuk injeks method postTodo
9. Masuk ke HTML
   -- Setting form dengan mamasukkan perintah seperti contoh di :
      https://angular.io/guide/reactive-forms
10. Buka App-todo module, import ReactiveModule

=====DetailTodo Execute in HTML=====
1. Ke file DetailComponent.ts
2. Import Servis yang sudah dibuat
3. Import model
4. Import observable
5. Import ActivatedRoute, Router
6. Buat depedensi injeksi dengan menggunakan servis yg sudah dibuat dan Route untuk mendapatkan Id diparameter, Router untuk mengarahkan ke halaman selanjutnya apabila proses berhasil :
   -- private serviceName:ServiceNameClass, private route: ActivatedRoute, private router: Router ->didalam constructor
7. buat varibel untuk menampung data sementara
    todo : any;
    _id:any;
    title:string;
    description:string;
8. Gunakan varibel sementara _id, untuk mendapatkan id yg ada di parameter
9. Eksekusi method GetTodoByID
10. Tampung objek yang didapat pada variabel sementara
11. Di HTML, gunakan [(ngModel)] untuk menerima value dari variabel sementara
12. Import FormModule di App-todoModule 
