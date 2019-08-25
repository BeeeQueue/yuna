import {
  AddToListMutation,
  AddToListVariables,
  DeleteFromListMutation,
  DeleteFromListVariables,
  UpdateProgressMutation,
  UpdateProgressVariables,
  UpdateStatusMutation,
  UpdateStatusVariables,
} from '@/graphql/types'

export const AddToList = async (
  _root: undefined,
  { anilistId }: AddToListVariables,
  _cache: { cache: RealProxy },
): Promise<ListEntryFragment> => {
  const promises = window.listPlugins.map(plugin => plugin.AddToList(anilistId))
  const results = await Promise.all(promises)

  return results[0]
}

export const DeleteFromList = async (
  _root: undefined,
  { anilistId }: DeleteFromListVariables,
  _cache: { cache: RealProxy },
): Promise<Boolean> => {
  const promises = window.listPlugins.map(plugin => plugin.DeleteFromList(anilistId))
  const results = await Promise.all(promises)

  return results[0]
}

export const UpdateStatus = async (
  _root: undefined,
  { anilistId, status }: UpdateStatusVariables,
  _cache: { cache: RealProxy },
): Promise<ListEntryFragment> => {
  const promises = window.listPlugins.map(plugin => plugin.UpdateStatus(anilistId, status))

export const UpdateProgress = async (
  _root: undefined,
  { anilistId, progress, provider }: UpdateProgressVariables,
  _cache: { cache: RealProxy },
): Promise<UpdateProgressMutation['UpdateProgress']> => {
  const promises = window.listPlugins.map(plugin =>
    plugin.UpdateProgress(anilistId, progress, provider),
  )
  const results = await Promise.all(promises)

  return results[0]
}
