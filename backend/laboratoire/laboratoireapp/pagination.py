from rest_framework.pagination import PageNumberPagination,LimitOffsetPagination

class AnalysePageNumberPagination(PageNumberPagination):
    page_size = 10
class AnalyseLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10
    max_limit = 20


class ArticlePageNumberPagination(PageNumberPagination):
    page_size = 10

class ArticleLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10
    max_limit = 20

class SpecialitePageNumberPagination(PageNumberPagination):
    page_size = 10

class SpecialiteLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10
    max_limit = 20

class NotificationPageNumberPagination(PageNumberPagination):
    page_size = 10

class NotificationLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10
    max_limit = 20

class LaboratoirePageNumberPagination(PageNumberPagination):
    page_size = 10

class LaboratoireLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10
    max_limit = 20

class UtilisateurPageNumberPagination(PageNumberPagination):
    page_size = 10

class UtilisateurLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10
    max_limit = 20
