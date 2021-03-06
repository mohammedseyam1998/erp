<?php
/**
 * Created by PhpStorm.
 * User: WeSSaM
 * Date: 15/01/2020
 * Time: 12:07 PM
 */

namespace Core\Settings\Repository;

use App\Repositories\ModelRepository;
use App\Scopes\FilterScope;
use Core\Settings\Interfaces\CategoryInterface;
use Core\Settings\Models\Category;
use Core\Settings\Models\Resources\CategoryResource;
use Illuminate\Http\Request;

class CategoryRepository extends ModelRepository implements CategoryInterface
{
    public $modelRepository;

    public $model = Category::class;
    public $relation = 'categories';
    public $guard = ADMIN_GUARD;
    public $resource = CategoryResource::class;
    public $orderBy = 'created_at';
    public $sortBy = 'DESC';

    /**
     * CategoryRepository constructor.
     * @param ModelRepository $modelRepository
     * Author WeSSaM
     */
    public function __construct(ModelRepository $modelRepository)
    {
        $this->modelRepository = $modelRepository;
    }

    /**
     * @param Request $request
     * @return mixed
     * @throws \App\Exceptions\ResourceManipulationException
     */
    public function store(Request $request)
    {
        return parent::store($request); // TODO: Change the autogenerated stub
    }


    /**
     * @return mixed
     * @throws \App\Exceptions\UnknownRelationException
     */
    public function all()
    {
        if (request()->has('filter'))
            return $this->query()->get();
        return $this->query()->whereNull('parent_id')->get();
    }


    /**
     * @return mixed
     * @throws \App\Exceptions\UnknownRelationException
     */
    public function allWithResource()
    {
        return $this->getFilteredData();
    }


    /**
     * @param array $attributes
     * @return mixed
     * @throws \App\Exceptions\UnknownRelationException
     */
    public function query($attributes = ['*'])
    {
        return parent::query($attributes);//->withoutGlobalScope(FilterScope::class); // TODO: Change the autogenerated stub
    }

    /**
     * this function return the collection according
     * to the filter's flag
     * if it's existed, return all category with their children
     * without any duplication
     * otherwise ,just return the collection without any
     * manipulations
     *
     * @return mixed
     * @throws \App\Exceptions\UnknownRelationException
     * @author Amr
     */
    function getFilteredData()
    {
        $collection = $this->resource::collection($this->all());
        if (!\request()->has('filter'))
            return $collection;
        $collectionIds = $collection->pluck('id')->toArray();
        return $collection->filter(function ($item) use ($collectionIds) {
            return !in_array($item->parent_id, $collectionIds);
        });
    }
}