window.questions_laravel = [
  {
    "question": "What is Laravel?",
    "answer": "Laravel is a modern PHP web framework following MVC that provides routing, Eloquent ORM, queues, caching, authentication, and a rich tooling ecosystem (Artisan) to build secure, scalable applications efficiently."
  },
  {
    "question": "What is the latest Laravel version?",
    "answer": "Laravel 12.x; released Feb 24, 2025, and actively maintained with frequent point releases."
  },
  {
    "question": "What is Eloquent?",
    "answer": "Eloquent is Laravel’s Active Record ORM that maps models to database tables and provides expressive query building, relationships, attribute casting, scopes, events, and eager loading for efficient data access."
  },
  {
    "question": "Explain Routing in Laravel",
    "answer": "Routing maps HTTP requests to controllers/closures and supports route groups, middleware, names, prefixes, model binding, and versioned API routes (routes/web.php and routes/api.php)."
  },
  {
    "question": "Explain Middleware in Laravel",
    "answer": "Middleware are request filters that run before/after controllers to handle concerns like auth, CSRF, throttling, trimming strings, and maintenance checks; they can be global or route-scoped."
  },
  {
    "question": "What Are Laravel Service Providers?",
    "answer": "Service providers bootstrap the application by registering bindings, event listeners, routes, and configurations in the service container; they are the central place to configure services during app startup."
  },
  {
    "question": "Explain Migrations in Laravel",
    "answer": "Migrations are version-controlled database schema changes written in PHP that support team collaboration and CI; paired with seeders and rollback for safe schema evolution."
  },
  {
    "question": "What is dependency injection in Laravel?",
    "answer": "Dependency injection (DI) lets Laravel provide class dependencies via constructors or setters, powered by the service container which resolves and injects implementations at runtime for decoupling and testability."
  },
  {
    "question": "Explain Validations in Laravel",
    "answer": "Validation uses Form Request classes or validator rules to enforce input constraints, with robust rule sets, nested array validation, custom messages, and automatic redirect/JSON errors for web/API."
  },
  {
    "question": "How Does Laravel Handle Database Transactions?",
    "answer": "Use DB::transaction(...) to execute operations atomically; if an exception occurs, the transaction is rolled back, ensuring data integrity across multiple queries or model operations."
  },
  {
    "question": "What is Composer in Laravel? / Define composer",
    "answer": "Composer is PHP’s dependency manager used by Laravel to install framework packages, manage autoloading, and handle third-party libraries via composer.json and Packagist."
  },
  {
    "question": "Describe Localization In Laravel",
    "answer": "Localization provides translation files and helpers to serve content in multiple languages, handling language lines, pluralization, and locale switching to internationalize applications."
  },
  {
    "question": "Explain Service Containers",
    "answer": "The Laravel service container (IoC container) manages class dependencies and DI: bind interfaces to implementations (singleton/bind/instance), resolve services (make()), and power auto-resolving in controllers and jobs."
  },
  {
    "question": "What are Laravel facades? / Facades",
    "answer": "Facades are static-looking proxies to container-bound services that provide terse syntax while resolving underlying instances from the container at runtime (e.g., Cache, DB, Queue)."
  },
  {
    "question": "What is MVC in Laravel?",
    "answer": "MVC separates concerns: Models (Eloquent/data), Views (Blade templates/UI), Controllers (request handling/business orchestration), improving maintainability and testability."
  },
  {
    "question": "What is soft delete in Laravel?",
    "answer": "Soft deletes mark records as deleted by setting deleted_at (SoftDeletes trait) so they’re excluded from queries by default but can be restored; withTrashed/onlyTrashed manage visibility."
  },
  {
    "question": "What Are Blade Templates",
    "answer": "Blade is Laravel’s lightweight templating engine with template inheritance (@extends/@section), components, control structures, and automatic output escaping for secure, reusable views."
  },
  {
    "question": "What are queues in Laravel?",
    "answer": "Queues offload time-consuming tasks (emails, media processing) to background workers; Laravel supports drivers like database, Redis, SQS, with retries, delays, and Horizon for Redis monitoring."
  },
  {
    "question": "What are Seeders in Laravel?",
    "answer": "Seeders populate databases with initial or test data via classes run with artisan db:seed, often used alongside model factories for realistic fixtures."
  },
  {
    "question": "What is Laravel Tinker?",
    "answer": "Tinker is an interactive REPL (PsySH) to run PHP/Laravel code in the app context for quick experimentation, debugging, and data inspection."
  },
  {
    "question": "What Is Maintenance Mode In Laravel",
    "answer": "Maintenance mode disables public access and returns 503 while allowing bypass via secret; enable with php artisan down (options: --with-secret, --retry, --refresh) and disable with php artisan up."
  },
  {
    "question": "Explain Logging In Laravel",
    "answer": "Laravel uses Monolog under the hood, configurable channels (single, daily, stack) and levels, context, and structured logging via config/logging.php to route logs to files, syslog, or cloud services."
  },
  {
    "question": "Describe Laravel’s request lifecycle.",
    "answer": "Request enters public/index.php → HTTP kernel (App\\Http\\Kernel) builds middleware stack → route resolved by router → controller/action executed → response sent → terminable middleware runs."
  },
  {
    "question": "What is the service container and why use it?",
    "answer": "It’s Laravel’s IoC container. It resolves class dependencies and manages bindings/singletons. Promotes loose coupling and testability via constructor injection."
  },
  {
    "question": "Service provider responsibilities?",
    "answer": "Register bindings (in register()), boot features that need other services (in boot()). They’re the primary place to configure container and package services."
  },
  {
    "question": "When to use facades vs. dependency injection?",
    "answer": "DI for testability and explicit dependencies. Facades for convenience in simple spots. Facades still use the container under the hood; in tests use facade fakes/spies."
  },
  {
    "question": "Explain middleware types and ordering.",
    "answer": "Global, group (web, api), route middleware. Order matters; outer wraps inner. Use terminable middleware for post-response work."
  },
  {
    "question": "Form request vs. inline validator?",
    "answer": "Form request encapsulates validation/authorization, reusable & cleaner. Inline Validator::make() is fine for quick one-offs."
  },
  {
    "question": "Route model binding (implicit vs. explicit)?",
    "answer": "Implicit: Route::get('/users/{user}', ...) auto resolves User. Explicit/custom keys via getRouteKeyName() or Route::bind()."
  },
  {
    "question": "How to validate nested arrays?",
    "answer": "Use dot/asterisk rules: 'items.*.sku' => ['required','string'], 'items.*.qty' => ['required','integer','min:1']."
  },
  {
    "question": "Eloquent vs. Query Builder?",
    "answer": "Eloquent: ActiveRecord, models/relations/events. Builder: lightweight, faster for complex joins/aggregations. Mix as needed."
  },
  {
    "question": "N+1 problem and fixes?",
    "answer": "Triggered by lazy loading in loops. Fix with eager loading: with(), load(), loadMissing(). Use Laravel Debugbar or Telescope to detect."
  },
  {
    "question": "When to use lazy()/chunk()?",
    "answer": "For large datasets to avoid memory bloat. chunkById() is safer with mutating queries."
  },
  {
    "question": "Global/local scopes and pitfalls?",
    "answer": "Global: apply to all queries (booted() + static::addGlobalScope). Provide withoutGlobalScopes() escape hatches to prevent surprises."
  },
  {
    "question": "Soft deletes: querying & force delete?",
    "answer": "use SoftDeletes; → default excludes trashed. Use withTrashed(), onlyTrashed(), restore(), forceDelete()."
  },
  {
    "question": "Optimistic locking pattern in Eloquent?",
    "answer": "Add version/lock_version column, check on update (where('version', $old)), increment on success. (Not built-in—implemented manually.)"
  },
  {
    "question": "Transactions in Laravel?",
    "answer": "DB::transaction(function () { /* ... */ }, 3); // 3 retries on deadlock. Or manual beginTransaction/commit/rollBack."
  },
  {
    "question": "Relationships performance tips?",
    "answer": "Select only needed columns, constrain eager loads: Post::with(['comments' => fn($q)=>$q->latest()->limit(5)])->get();"
  },
  {
    "question": "Cache strategies?",
    "answer": "Cache::remember() for read-through, rememberForever() when immutable, tag caches for group invalidation (non-file drivers)."
  },
  {
    "question": "Config/route/view caching—when?",
    "answer": "In production. php artisan config:cache, route:cache, view:cache. Beware dynamic route closures with route:cache."
  },
  {
    "question": "Octane—what changes?",
    "answer": "Long-lived app with Swoole/RoadRunner. Avoid per-request state in singletons, purge scoped data, use Octane::tick() for timers."
  },
  {
    "question": "Common performance wins?",
    "answer": "Indices at DB, avoid N+1, queue slow work, cache hot queries, use Redis driver, paginate, use DTOs/Resource transforms to trim payloads."
  },
  {
    "question": "Queue drivers & picking one?",
    "answer": "Sync (dev), database (simple), Redis (fast), Beanstalkd, SQS (managed). Choose based on ops maturity and scaling needs."
  },
  {
    "question": "Idempotency in jobs?",
    "answer": "Use unique keys, check state before acting, rely on DB constraints or Cache::lock() to prevent duplicates; handle retries safely."
  },
  {
    "question": "Horizon vs. queue:work?",
    "answer": "Horizon (Redis only) adds dashboard, balancing, tags, monitors, auto-scaling, supervisor config in code."
  },
  {
    "question": "Events vs. listeners vs. observers?",
    "answer": "Events decouple producers/consumers; observers tie to model lifecycle (created, updated). Use queued listeners for slow side effects."
  },
  {
    "question": "Sanctum vs. Passport?",
    "answer": "Sanctum: SPA/mobile APIs, simple token abilities, first-party SPA with cookies. Passport: full OAuth2 for third-party clients."
  },
  {
    "question": "Rate limiting (per user/IP)?",
    "answer": "Throttle via RateLimiter::for('api', fn($req) => Limit::perMinute(60)->by($req->user()?->id ?: $req->ip()));"
  },
  {
    "question": "CSRF in SPA?",
    "answer": "For cookie-based auth, use Sanctum + CSRF cookie endpoint; for token-based, send bearer tokens and disable CSRF on API routes."
  },
  {
    "question": "Prevent mass assignment issues?",
    "answer": "Use $fillable (allow-list) or guarded with caution. Prefer DTO/FormRequest to map fields explicitly."
  },
  {
    "question": "XSS/SQLi protections?",
    "answer": "Blade escapes by default ({{ }}), {!! !!} only for trusted HTML. Use parameter binding/Query Builder/Eloquent to prevent SQLi."
  },
  {
    "question": "Authorize with policies/gates?",
    "answer": "Policies map to models; auto-discover via naming. In controllers: $this->authorize('update', $post); or policy methods in resources."
  },
  {
    "question": "Feature vs. unit tests?",
    "answer": "Unit: small, isolated. Feature: HTTP/kernel/database integrated. Use factories/seeders and RefreshDatabase/DatabaseTransactions."
  },
  {
    "question": "Faking in tests?",
    "answer": "Bus::fake(), Event::fake(), Notification::fake(), Mail::fake(), Http::fake() to assert dispatched without doing work."
  },
  {
    "question": "HTTP client testing?",
    "answer": "Http::fake(['*' => Http::response([...], 200)]); and assert Http::assertSent() with constraints."
  },
  {
    "question": "Snapshot testing resources?",
    "answer": "Serialize resource to array/json and compare to expected; keep fixtures small and stable."
  },
  {
    "question": "Filesystem drivers & S3 tips?",
    "answer": "Use disks in filesystems.php. For S3, use temporaryUrl() for signed URLs, set correct ACLs/MIME, queue large uploads/processes."
  },
  {
    "question": "Task scheduling patterns?",
    "answer": "Define in app/Console/Kernel.php. Use ->withoutOverlapping(), ->onOneServer() for clustered environments; monitor with Horizon or logs."
  },
  {
    "question": "Repository/Service layers in Laravel—when?",
    "answer": "Use when domain is complex, multiple data sources, or heavy orchestration. Don’t add layers just to “hide” Eloquent."
  },
  {
    "question": "Form Objects / DTOs?",
    "answer": "Encapsulate request → domain mapping and validation. Improves testability and separates transport from domain."
  },
  {
    "question": "Domain Events & Outbox pattern?",
    "answer": "Raise domain events; persist alongside data; a worker publishes to external systems to guarantee at-least-once delivery."
  },
  {
    "question": "Broadcasting (Pusher/Ably/Soketi)?",
    "answer": "Configure driver, auth private/presence channels with policies, broadcast events via ShouldBroadcast, consume with Laravel Echo."
  },
  {
    "question": "Common production misconfigs to watch for?",
    "answer": "APP_DEBUG=false, correct APP_URL, queue worker supervisors (not queue:listen), cache warmed, config:cache after env changes, php-fpm/Octane memory leaks."
  },
  {
    "question": "Telescope vs. Debugbar?",
    "answer": "Debugbar: dev browser toolbar. Telescope: request/queries/jobs/cache/events monitoring; can be enabled in staging/production behind auth."
  },
  {
    "question": "Zero-downtime migration tips?",
    "answer": "Avoid blocking operations: add nullable columns, backfill in batches, then make non-null; use concurrent index features (DB-specific), feature flags."
  },
  {
    "question": "Seeding & factories (v8+ class-based)?",
    "answer": "Use model factories with states: User::factory()->admin()->count(3)->create(); Run seeders selectively and idempotently."
  },
  {
    "question": "Blade components & slots?",
    "answer": "Reusable UI with props/slots: <x-modal title=\"...\">...</x-modal>. Prefer for design systems, share macros via AppServiceProvider."
  },
  {
    "question": "Inertia vs. Livewire?",
    "answer": "Inertia: server-driven SPA with Vue/React/Svelte. Livewire: interactive components without writing JS. Pick based on team skills and SEO needs."
  }
];